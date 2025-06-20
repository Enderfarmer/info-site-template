export interface SiteData {
    siteTitle?: string;
    siteDescription?: string;
}
declare module "*.json" {
    const data: SiteData;
    export default data;
}
