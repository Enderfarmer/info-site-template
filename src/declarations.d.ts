interface Page {
    title: string;
    shortTitle?: string;
    linkText?: string;
    slug: string;
    content: string;
    description: string;
    withLink?: boolean;
}
interface SocialMediaLinkWithImage {
    href: string;
    image?: string;
    imageDark?: string;
}
type SocialMediaName = string;
export interface SiteData {
    siteTitle: string;
    siteDescription: string;
    motto?: string;
    answeredQuestions?: string[];
    startUpPages?: string[];
    keywords?: string[];
    author: string;
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
    pages: Page[];
}
type Theme = "light" | "dark";
declare module "content.json" {
    const data: SiteData;
    export default data;
}
declare module "contentDefaults.json" {
    const data: SiteData;
    export default data;
}
