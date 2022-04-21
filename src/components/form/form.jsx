import * as React from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {setNewData} from "../../store/form-reducer";
import {getData} from "../../api/api";

export const Form = () => {
    const formData = useSelector((state) => state.formData)
    const dispatch = useDispatch()
    // const sendData = (newData) => {
    //     console.log(newData)
    //     dispatch(setNewData(newData))
    // }
    useEffect(() => {
        dispatch(getData())
        // let newData = getData()
        // console.log(newData)
        console.log(formData)
    }, [formData, dispatch])
    console.log(formData)
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm()
    // {mode: "onChange"}
    const onSubmit = (data, e) => {
        let newData = Object.values(data)
        console.log(newData)
        dispatch(setNewData(newData))
        e.target.reset()
        reset({})
    }
    return (<div className={'container'}>
            <form onSubmit={handleSubmit(onSubmit)} className={"form"}>
                <h1>Form</h1>
                <div className={'form__item'}>
                    <div className="form__info">
                        <div className={'form__title'}>Layer name</div>
                    </div>
                    <input className={'form__input'} type="text" title={'Object name'}
                           placeholder={'Object name'}
                           {...register('dataLayer', {
                               maxLength: 25,
                               value: formData.dataLayer
                           })}/>
                </div>
                {errors.data && <i className={'errorStyle'}>Field required</i>}
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
                </div>
                {errors.data && <i className={'errorStyle'}>Field required</i>}
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
                </div>
                {errors.data && <i className={'errorStyle'}>Field required</i>}
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
                {errors.data && <i className={'errorStyle'}>Field required</i>}
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
                {errors.data && <i className={'errorStyle'}>Field required</i>}
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
                </div>
                {errors.data && <i className={'errorStyle'}>Field required</i>}
                <div className={'form__item'}>
                    <div className="form__info">
                        <div className={'form__title'}>Close type</div>
                    </div>
                    <select className={'form__input form__select'}
                            title={'Type of the closing action for Precen.'}
                            {...register("closeType", {
                                required: true,
                                value: formData.closeType
                            })}>
                        <option value="cross">cross</option>
                        <option value="tab">tab</option>
                    </select>
                </div>
                {errors.data && <i className={'errorStyle'}>Field required</i>}
                <input className={'send__btn'} type="submit"/>
            </form>
        </div>
        //     <div>
        //         {/*<SkillsList skills={skills} deleteSkill={deleteSkill}/>*/}
        //     </div>
        //     <div>
        //         {/*<input type="submit" onClick={() => sendData(formReducer)}/>*/}
        //     </div>
        // </div>
    )
}
