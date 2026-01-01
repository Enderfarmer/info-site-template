import { HashRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import defaults from "./contentDefaults.json";
import { ThemeContext } from "./theme";
import Wrapper from "./components/Wrapper";
import {
    UserProvidedSiteData,
    ValidSiteData,
    Theme,
    Page,
    PageData,
} from "../declarations";
import "./index.css";
import Content from "./pages/Content";
import PageGen from "./pages/Page";
import Search from "./pages/Search";
import React from "react";

/**
 * The info site generator main component
 * @returns A ready app based on the data provided
 */
function SiteGen({
    data_provided,
    children,
}: {
    data_provided?: UserProvidedSiteData;
    children?: React.ReactNode;
}) {
    const childRenderCallback = (child: any) => {
        // Check if it's a valid React element (not a string or null)
        if (!React.isValidElement(child)) {
            return (
                <Route
                    path={child.slug}
                    element={
                        <Wrapper
                            component={<PageGen data={child} />}
                            data={validData}
                        />
                    }
                />
            );
        }

        // Tell TS this element has props with an 'id'
        const pageElement = child as Page;
        const pageId = pageElement.props.id;

        // Get the metadata from our data object
        const pageMetadata = validData.pages[pageId];

        if (!pageMetadata) {
            console.warn(
                `No metadata found in data object for page ID: ${pageId}`
            );
            return null;
        }

        return (
            <Route
                key={pageId}
                path={pageMetadata.slug}
                element={
                    <Wrapper
                        data={validData}
                        component={
                            <PageGen page={pageElement} data={pageMetadata} />
                        }
                    />
                }
            />
        );
    };
    const validData: ValidSiteData = {
        ...(defaults as unknown as ValidSiteData),
        ...data_provided,
    };
    Object.values(validData.pages).forEach((page) => {
        page.withLink = page.withLink ?? true;
    });
    return (
        <ThemeContext.Provider
            value={(localStorage.getItem("theme") as Theme) || "light"}
        >
            <HashRouter>
                <Routes>
                    <Route
                        index
                        element={
                            <Wrapper
                                data={validData}
                                component={<Home data={validData} />}
                            />
                        }
                    />
                    <Route
                        path="all-content"
                        element={
                            <Wrapper
                                data={validData}
                                component={<Content data={validData} />}
                            />
                        }
                    />
                    <Route
                        path="search"
                        element={
                            <Wrapper
                                data={validData}
                                component={<Search data={validData} />}
                            />
                        }
                    />
                    {children
                        ? React.Children.map(children, childRenderCallback)
                        : defaults.pages.map(childRenderCallback)}
                </Routes>
            </HashRouter>
        </ThemeContext.Provider>
    );
}

export default SiteGen;
