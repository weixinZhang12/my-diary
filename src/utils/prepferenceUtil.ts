import { Preferences } from '@capacitor/preferences';
import userConfig, { UserConfig } from '../config/userConfig';

const preferenceUtils = {
    // 读取用户配置
    async getUserConfig() {
        const stringResult = await (await Preferences.get({ key: 'userConfig' })).value
        // 若没有读取到,则重新创建一个
        if (stringResult === null) {
            this.setUserConfig(userConfig)
            const stringResult = (await Preferences.get({ key: 'userConfig' })).value 
            // 重新读取
            const result:UserConfig=JSON.parse(stringResult as string)
            // 返回
            return result
        }
        const result:UserConfig=JSON.parse(stringResult as unknown as string)
        return result
    },
    async setUserConfig(data: UserConfig) {
        Preferences.set({ key: 'userConfig', value: JSON.stringify(data) })
    }
}
export default preferenceUtils