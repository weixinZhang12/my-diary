import userConfig from "../config/userConfig";
import en from "./en";
import zh from "./zh";
export interface Lang {
    home_left_popup_img_text: string
    home_left_popup_theme_text: string
    home_left_popup_setting_text: string
    home_content_enpty_text:string
    setting_userinfo:string
    setting_style:string
    setting_import_and_exort:string
    setting_about:string
    setting_langue:string
}

const langManger= {
    zh: zh,
    en: en
}
export default langManger
export const lang=langManger[userConfig.lang]

