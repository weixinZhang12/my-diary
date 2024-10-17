import userConfig from "../config/userConfig";
import en from "./en";
import zh from "./zh";
export interface Lang {
    home_left_img_text: string
    home_left_theme_text: string
    home_left_setting_text: string
    home_content_enpty_text:string
}

const langManger= {
    zh: zh,
    en: en
}
export default langManger
export const lang=langManger[userConfig.lang]

