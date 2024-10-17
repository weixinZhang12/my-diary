import styleUtils from "./styleUtils"

export default {
    initStyle: () => {
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches; // 是深色       console.log(isDark);

        if (isDark) {
          
        }
    }
}