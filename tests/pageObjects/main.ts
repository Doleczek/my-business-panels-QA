import { Page, expect, Locator } from "@playwright/test"
export default class Mainy {
    readonly page:Page
    constructor(page:Page){
        this.page=page
    }
    async openPlanningTool(){
        // await this.page.getByAltText("Production Planing Tool").click()
        await this.page.locator("#toolnavbtn").click()
        const Url = this.page.url()
        expect(Url).toBe(process.env.BASE_URL+ "/tool/")
}}