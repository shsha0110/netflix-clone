import './style.css'; 

import { create_header } from "./header/header.js";
import { create_hero } from "./hero/hero.js";
import { create_content } from "./content/content.js";
import { create_footer } from "./footer/footer.js";

async function start_app() {
    const app_data_path = "/data/app_data.json";
    const app_data_response = await fetch(app_data_path);
    const app_data = await app_data_response.json();

    create_header(document.body, app_data.header);
    create_hero(document.body, app_data.hero);
    create_content(document.body, app_data.content);
    create_footer(document.body, app_data.footer);
} 

start_app();