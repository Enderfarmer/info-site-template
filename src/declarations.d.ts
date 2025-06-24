interface EmbedImage {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    key: string;
}
interface Page {
    title: string;
    shortTitle?: string;
    linkText?: string;
    slug: string;
    content: string;
    description?: string;
    withLink?: boolean;
    images?: EmbedImage[];
}
export interface SiteData {
    siteTitle?: string;
    siteDescription?: string;
    keywords?: string[];
    author?: string;
    language?: string;
    url?: string;
    customNavLinks?: { text: string; href: string }[];
    brandColor?: string;
    brandColorDark?: string;
    brandColorIsDark?: boolean;
    socialMedia?: {
        present: boolean;
        twitter?: string;
        facebook?: string;
        instagram?: string;
        linkedin?: string;
        github?: string;
        youtube?: string;
        tiktok?: string;
        pinterest?: string;
        reddit?: string;
    };
    contactEmail?: string;
    pages?: Page[];
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
