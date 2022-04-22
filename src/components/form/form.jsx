import * as React from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {setNewData} from "../../store/form-reducer.ts";
import {getFormData, sendFormData} from "../../api/api";


export const Form = () => {
    const formData = useSelector((state) => state.formData.formData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFormData())
        console.log(formData)
    },[])
    useEffect(() => {
        console.log(formData)
    },[formData])
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm()

    const onSubmit = (data, e) => {
        let newFormData = {
            dataLayer: Object.values(data)[0],
            darkMode: Object.values(data)[1],
            primaryColor: Object.values(data)[2],
            borderRadius: Object.values(data)[3],
            dismissible: Object.values(data)[4],
            dismissType: Object.values(data)[5],
            expiration: Object.values(data)[6],
            closeType: Object.values(data)[7],
        }
        if (newFormData.dataLayer.length === 0) {
            delete newFormData.dataLayer
        }
        if (newFormData.darkMode.length === 0) {
            delete newFormData.darkMode
        }
        if (newFormData.closeType.length === 0) {
            delete newFormData.closeType
        }
        // let i = JSON.stringify(newFormData)
        // console.log(i)
        sendFormData(newFormData)
        dispatch(setNewData(newFormData))
        e.target.reset()
        reset({})
    }
    console.log(formData)

    return (<div className={'container'}>
            <form onSubmit={handleSubmit(onSubmit)} className={"form"}>
                <h1>Form</h1>
                 <div className={'form__item'}>
                    <div className="form__info">
                        <div className={'form__title'}>Layer name</div>
                    </div>
                    <input className={'form__input'} type="text" title={'Object name'}
                           {...register('dataLayer', {
                               maxLength: 25,
                               value: formData.dataLayer
                           })}/>
                    {errors.dataLayer && <i className={'errorStyle'}>Field required</i>}
                </div>
                 <div className={'form__item'}>
                    <div className="form__info">
                        <div className={'form__title'}>Dark mode</div>
                    </div>
                    <select className={'form__input form__select'}
                            title={'If the background color is dark or light'}
                            {...register("darkMode", {
                                value: formData.darkMode
                            })}>
                        <option value=""></option>
                        <option value="false">false</option>
                        <option value="true">true</option>
                    </select>
                </div>
                {errors.darkMode && <i className={'errorStyle'}>Field required</i>}
                <div className={'form__item'}>
                    <div className="form__info">
                        <div className={'form__title'}>Primary color</div>
                    </div>
                    <input className={'form__input'} type="text"
                           title={'Primary action color. Used for buttons and links.'}
                           {...register('primaryColor', {
                               required: true,
                               maxLength: 7,
                               value: formData.primaryColor
                           })}/>
                    {errors.primaryColor && <i className={'errorStyle'}>Field required</i>}
                </div>

                <div className={'form__item'}>
                    <div className="form__info">
                        <div className={'form__title'}>Border radius</div>
                    </div>
                    <input className={'form__input'} type="number"
                           title={'Basic border radius for elements with rounded corners. * In px.'}
                           {...register('borderRadius', {
                               required: true,
                               maxLength: 25,
                               value: formData.borderRadius
                           })}/>
                    {errors.borderRadius && <i className={'errorStyle'}>Field required</i>}
                </div>
                <div className={'form__item'}>
                    <div className="form__info">
                        <div className={'form__title'}>Dismissible</div>
                    </div>
                    <select className={'form__input form__select'}
                            title={'If the consentbar is dismissible without consent actions'}
                            {...register("dismissible", {
                                required: true,
                                value: formData.dismissible
                            })}>
                        <option value="false">false</option>
                        <option value="true">true</option>
                    </select>
                </div>
                <div className={'form__item'}>
                    <div className="form__info">
                        <div className={'form__title'}>Dismiss type</div>
                    </div>
                    <select className={'form__input form__select'}
                            title={'Type of action to dismiss consentbar'}
                            {...register("dismissType", {
                                required: true,
                                value: formData.dismissType
                            })}>
                        <option value="cross">cross</option>
                        <option value="cross-faint">cross-faint</option>
                        <option value="text">text</option>
                    </select>
                </div>
                <div className={'form__item'}>
                    <div className="form__info">
                        <div className={'form__title'}>Expiration</div>
                    </div>
                    <input className={'form__input'} type="number"
                           title={'Period after which consentbar is shown again. Regardless of consent statuses. * In days'}
                           {...register('expiration', {
                               required: true,
                               maxLength: 3,
                               value: formData.expiration
                           })}/>
                    {errors.expiration && <i className={'errorStyle'}>Field required</i>}
                </div>
                <div className={'form__item'}>
                    <div className="form__info">
                        <div className={'form__title'}>Close type</div>
                    </div>
                    <select className={'form__input form__select'}
                            title={'Type of the closing action for Precen.'}
                            {...register("closeType", {
                                value: formData.closeType
                            })}>
                        <option value=""></option>
                        <option value="cross">cross</option>
                        <option value="tab">tab</option>
                    </select>
                </div>
                <input className={'send__btn'} type="submit"/>
            </form>
        </div>
    )
}
