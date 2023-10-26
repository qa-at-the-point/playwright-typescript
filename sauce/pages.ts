import { type Page } from '@playwright/test';
import { LoginPage } from './pages/login';
import { ProductsPage } from './pages/products';


export class Pages {
    private readonly _page: Page
    private _login: LoginPage
    private _products: ProductsPage

    constructor(page: Page) {
        this._page = page
    }

    login() {
        this._login = this._login ?? new LoginPage(this._page)
        return this._login
    }

    products() {
        this._products = this._products ?? new ProductsPage(this._page)
        return this._products
    }
}
