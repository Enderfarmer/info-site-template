import React from "react";

interface PageData {
    title: string;
    shortTitle?: string;
    linkText?: string;
    slug: string;
    content?: string;
    description: string;
    withLink?: boolean;
}
interface PageComponentProps {
    id: string;
}
interface Page extends React.ReactElement<PageComponentProps> {}
interface SocialMediaLinkWithImage {
    href: string;
    image?: string;
    imageDark?: string;
}
type SocialMediaName = string;
export interface UserProvidedSiteData {
    siteTitle?: string;
    siteDescription?: string;
    motto?: string;
    answeredQuestions?: string[];
    startUpPages?: string[];
    keywords?: string[];
    author?: string;
    language?: string;
    url?: string;
    customNavLinks?: { text: string; href: string }[];
    brandColor?: string;
    brandColorDark?: string;
    brandColorIsDark?: boolean;
    socialMedia?: {
        [key: SocialMediaName]: SocialMediaLinkWithImage;
    };
    contactEmail?: string;
    pages?: {
        [key: string]: PageData;
    };
}
export interface ValidSiteData {
    siteTitle: string;
    siteDescription: string;
    motto: string;
    answeredQuestions: string[];
    startUpPages: string[];
    keywords: string[];
    author: string;
    language: string;
    url: string;
    customNavLinks: { text: string; href: string }[];
    brandColor: string;
    brandColorDark: string;
    brandColorIsDark: boolean;
    socialMedia: {
        [key: SocialMediaName]: SocialMediaLinkWithImage;
    };
    contactEmail: string;
    pages: {
        [key: string]: PageData;
    };
}
type Theme = "light" | "dark";
declare module "contentDefaults.json" {
    const data: UserProvidedSiteData;
    export default data;
}
declare module "index.js" {
    const SiteGen: Function;
    export default SiteGen;
}
