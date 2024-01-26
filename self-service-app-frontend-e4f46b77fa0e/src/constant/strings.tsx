import { useTranslation } from 'react-i18next'

export const STRINGS = {
    //LEADING SCREEN
    your_one_stop_application: getTranslation('your_one_stop_application'),
    boost_your_life_enhance_your_world: getTranslation('boost_your_life_enhance_your_world'),
    let_get_started: getTranslation('let_get_started'),

    //LOGIN SCREEN
    welcome_to: getTranslation('welcome_to'),
    telecom: getTranslation('telecom'),
    insert_your_phone_number_to_continue: getTranslation('insert_your_phone_number_to_continue'),
    mobile_number: getTranslation('mobile_number'),
    continue: getTranslation('continue'),
    or: getTranslation('or'),
    continue_with_apple: getTranslation('continue_with_apple'),
    continue_with_facebook: getTranslation('continue_with_facebook'),
    continue_with_google: getTranslation('continue_with_google'),
}

export function getTranslation(str: string) {
    const { t } = useTranslation()
    return t(str)
}