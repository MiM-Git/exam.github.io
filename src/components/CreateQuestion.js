import React, { useState } from 'react'
import { FaFileUpload } from 'react-icons/fa'
import ExamNav from './ExamNav'
import SideNav from './SideNav'
import './CreateQuestiom.css'
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import { toast, ToastContainer } from 'react-toastify';
import DropFileInput from './DropFileInput'
import "react-toastify/dist/ReactToastify.css";

function CreateQuestion() {
    const [descriptiveFields, setDescriptiveFields] = useState()
    const [multiChoiceQuestion, setMultiChoiceQuestion] = useState()
    const [multiChoiceQuestionF, setMultiChoiceQuestionF] = useState()
    const [optionOneField, setOptionOneField] = useState(false)
    const [optionOneQuestion, setOptionOneQuestion] = useState()
    const [optionTwoQuestion, setOptionTwoQuestion] = useState()
    const [optionThreeQuestion, setOptionThreeQuestion] = useState()
    const [optionFourQuestion, setOptionFourQuestion] = useState()
    const [optionTwoField, setOptionTwoField] = useState(false)
    const [optionThreeField, setOptionThreeField] = useState(false)
    const [optionFourField, setOptionFourField] = useState(false)
    const [fileUpload, setFileUpload] = useState([])
    const [descriptiveF, setDescriptiveF] = useState()
    const [SetUploadF, setUploadF] = useState([])
    const [addUpload, setAddUpload] = useState(false)
    const [addDescriptive, setAddDescriptive] = useState(false)
    const [addBtn, setAddBtn] = useState(true)


    const addFileFields = () => {
        setAddBtn(false)
        setAddUpload(true)
    }

    const addDescriptiveFields = () => {
        setAddDescriptive(true)
        setAddBtn(false)
    }
    const handleRemoveDesc = (e) => {
        setAddBtn(true)
        setAddDescriptive(false)
    }
    const handleRemoveMulti = (e) => {
        setAddBtn(true)
        setAddFild(false)
    }
    const handleRemoveFile = (e) => {
        setAddBtn(true)
        setAddUpload(false)
    }

    const handleMultiChoiceQChange = (event) => {
        setMultiChoiceQuestion(event.slice(3, event.length - 8))
    }

    const [selectedRadio, setSelectedRadio] = useState();

    const radioOne = (e) => {
        setOptionOneField(e.target.checked)
        setSelectedRadio(e.target.id)
    }
    const radioTwo = (e) => {
        setOptionTwoField(e.target.checked)
    }
    const radioThree = (e) => {
        setOptionThreeField(e.target.checked)
    }
    const radioFour = (e) => {
        setOptionFourField(e.target.checked)

    }
    const submit = (e) => {
        e.preventDefault();
        if (optionTwoField === true && optionOneField === true) {
            toast.error("شما نوع سوال تستی تک جوابی را انتخاب کردید", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        }
        if (optionThreeField === true && optionOneField === true) {
            toast.error("شما نوع سوال تستی تک جوابی را انتخاب کردید", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        }
        if (optionFourField === true && optionOneField === true) {
            toast.error("شما نوع سوال تستی تک جوابی را انتخاب کردید", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        }
        if (optionThreeField === true && optionTwoField === true) {
            toast.error("شما نوع سوال تستی تک جوابی را انتخاب کردید", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        }
        if (optionFourField === true && optionTwoField === true) {
            toast.error("شما نوع سوال تستی تک جوابی را انتخاب کردید", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        }
        if (optionThreeField === true && optionFourField === true) {
            toast.error("شما نوع سوال تستی تک جوابی را انتخاب کردید", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        }
        if (optionOneField === true && optionTwoField === true && optionThreeField === true) {
            toast.error("شما نوع سوال تستی تک جوابی را انتخاب کردید", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        }
        if (optionOneField === true && optionTwoField === true && optionFourField === true) {
            toast.error("شما نوع سوال تستی تک جوابی را انتخاب کردید", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        }
        if (optionTwoField === true && optionThreeField === true && optionFourField === true) {
            toast.error("شما نوع سوال تستی تک جوابی را انتخاب کردید", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        }
        if (optionFourField === true && optionThreeField === true && optionTwoField === true && optionOneField === true) {
            toast.error("شما نوع سوال تستی تک جوابی را انتخاب کردید", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        }
        if (optionFourField === false && optionThreeField === false && optionTwoField === false && optionOneField === false) {
            toast.error("جواب سوال نمی تواند خالی باشد .", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        }
        else {
            const newQuestion = {
                type: 'test',
                text: multiChoiceQuestion,
                options: [
                    { id: 0, text: optionOneQuestion, isCorrect: optionOneField },
                    { id: 1, text: optionTwoQuestion, isCorrect: optionTwoField },
                    { id: 2, text: optionThreeQuestion, isCorrect: optionThreeField },
                    { id: 3, text: optionFourQuestion, isCorrect: optionFourField },
                ],
            }
            setMultiChoiceQuestionF(newQuestion)
            toast.success("سوال با موفقیت ثبت شد .", {
                position: toast.POSITION.BOTTOM_CENTER
            });
            // setAddBtn(true)
            // setAddFild(false) 
            toast.success("سوال با موفقیت ثبت شد .", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        }
    }
    const submitDesc = (e) => {
        e.preventDefault();
        if (!descriptiveFields) {
            toast.error("جواب سوال نمی تواند خالی باشد .", {
                position: toast.POSITION.BOTTOM_CENTER
            });
            return
        }
        else {
            const newQuestion = {
                type: 'descriptive',
                text: descriptiveFields,
            }
            setDescriptiveF(newQuestion)
            toast.success("سوال با موفقیت ثبت شد .", {
                position: toast.POSITION.BOTTOM_CENTER
            });
            // setAddBtn(true)
            // setAddDescriptive(false) 
        }
    }
    const submitFile = (e) => {
        e.preventDefault()
        if (fileUpload.length <= 0) {
            toast.error("لطفا فایل مورد نظر را بارگذاری کنید", {
                position: toast.POSITION.BOTTOM_CENTER
            });
            return
        }
        else {
            const uploaadedQuestion = {
                type: 'file',
                fileUpload
            }
            setUploadF(uploaadedQuestion)
            toast.success("سوال با موفقیت ثبت شد .", {
                position: toast.POSITION.BOTTOM_CENTER
            });
            // setAddBtn(true)
            // setAddUpload(false)  
        }

    }
    // console.log(multiChoiceQuestionF)
    // console.log(descriptiveF)
    console.log(fileUpload)

    const [addFild, setAddFild] = useState(false)
    const addMultiChoiceFields = () => {
        setAddBtn(false)
        setAddFild(true)
    }
    const onFileChange = (files) => {
        setFileUpload(files);
    }
    return (
        <>
            <SideNav />
            <ExamNav />
            <div className='dashboard-body' style={{ paddingTop: '110px' }}>
                <div className='container'>
                    {
                        addDescriptive ?

                            <form className='question-form' onSubmit={submit}>
                                <div className='box-sec' style={{ padding: '15px 10px' }}>
                                    <h4>متن سوال</h4>
                                    <SunEditor defaultValue='' name='question' onChange={e => setDescriptiveFields(e.slice(3, e.length - 8))} setDefaultStyle="font-family: IranSans; font-size: 15px;" />
                                </div>
                                <button onClick={submitDesc}>ثبت سوال</button>
                                <button onClick={(e) => handleRemoveDesc(e)}>حذف سوال</button>
                                <ToastContainer theme='colored' pauseOnHover={false} />

                            </form>
                            : null
                    }

                    {
                        addUpload ?
                            <form className='question-form' >
                                <DropFileInput
                                    onFileChange={(files) => onFileChange(files)}
                                />
                                <ToastContainer theme='colored' pauseOnHover={false} />
                                <button onClick={e => submitFile(e)}>ثبت سوال</button>
                                <button onClick={(e) => handleRemoveFile(e)}>حذف سوال</button>
                            </form>
                            : null
                    }
                    {
                        addFild ?
                            <form className='question-form' onSubmit={submit}>
                                <div className='box-sec' style={{ padding: '15px 10px' }}>
                                    <h4>متن سوال</h4>
                                    <SunEditor setDefaultStyle="font-family: IranSans; font-size: 15px;" name='question' onChange={e => handleMultiChoiceQChange(e)} />
                                </div>
                                <div className='box-sec'>
                                    <h4>گزینه اول</h4>
                                    <div className='choice-sections'>
                                        <input
                                            id='1'
                                            className='choice'
                                            defaultValue={selectedRadio}
                                            value={selectedRadio}
                                            type={'checkbox'}
                                            name={`question`}
                                            onChange={e => radioOne(e)}
                                        />
                                        <SunEditor setDefaultStyle="font-family: IranSans; font-size: 15px;" name='question' onChange={e => setOptionOneQuestion(e.slice(3, e.length - 8))} />
                                    </div>
                                </div>
                                <div className='box-sec'>
                                    <h4>گزینه دوم</h4>
                                    <div className='choice-sections'>
                                        <input
                                            id='2'
                                            className='choice'
                                            defaultValue={selectedRadio}
                                            value={selectedRadio}
                                            type={'checkbox'}
                                            name={`question`}
                                            onChange={e => radioTwo(e)}
                                        />
                                        <SunEditor name='question' setDefaultStyle="font-family: IranSans; font-size: 15px;" onChange={e => setOptionTwoQuestion(e.slice(3, e.length - 8))} />
                                    </div>
                                </div>
                                <div className='box-sec'>
                                    <h4>گزینه سوم</h4>
                                    <div className='choice-sections'>
                                        <input
                                            id='3'
                                            className='choice'
                                            defaultValue={selectedRadio}
                                            value={selectedRadio}
                                            type={'checkbox'}
                                            name={`question`}
                                            onChange={e => radioThree(e)}
                                        />
                                        <SunEditor name='question' onChange={e => setOptionThreeQuestion(e.slice(3, e.length - 8))} setDefaultStyle="font-family: IranSans; font-size: 15px;" />
                                    </div>
                                </div>
                                <div className='box-sec'>
                                    <h4>گزینه چهارم</h4>
                                    <div className='choice-sections'>
                                        <input
                                            id='4'
                                            className='choice'
                                            defaultValue={selectedRadio}
                                            value={selectedRadio}
                                            type={'checkbox'}
                                            onChange={e => radioFour(e)}
                                            name={`question`}
                                        />
                                        <SunEditor name='question' onChange={e => setOptionFourQuestion(e.slice(3, e.length - 8))} setDefaultStyle="font-family: IranSans; font-size: 15px;" />
                                    </div>
                                </div>
                                <button onClick={submit}>ثبت سوال</button>
                                <button onClick={(e) => handleRemoveMulti(e)}>حذف سوال</button>
                                <ToastContainer theme='colored' pauseOnHover={false} />

                            </form>
                            : null
                    }
                    {
                        addBtn ?
                            <div className='question-form' >
                                <button onClick={addDescriptiveFields}>اضافه کردن سوال تشریحی</button>
                                <button onClick={addMultiChoiceFields}>اضافه کردن سوال تستی</button>
                                <button onClick={addFileFields}>بارگذاری سوال</button>
                                {/* <button onClick={notify}>Notify</button>; */}
                            </div>
                            : null
                    }

                    <br />
                </div>
                <ToastContainer theme='colored' pauseOnHover={false} />

            </div>
        </>
    )
}

export default CreateQuestion




// id exam
// type
// text
// answer
// file name
