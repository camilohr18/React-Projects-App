import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({onAdd, onCancel}) => {

    const title = useRef()
    const desc = useRef()
    const dueDate = useRef()
    const modal = useRef()

    const handleSave =()=> {
        const enteredTitle = title.current.value;
        const enteredDesc = desc.current.value;
        const enteredDueDate = dueDate.current.value;

        if(enteredTitle.trim() === '' || enteredDesc.trim() === '' || enteredDueDate.trim() === '') {
            modal.current.open();
            return
        }

        onAdd({
            title: enteredTitle,
            desc: enteredDesc,
            due: enteredDueDate
        })

    }


    return(
        <>
        <Modal ref={modal} buttonCaption={'Close'}>
            <h2 className='text-xl fony-bold text-stone-700 my-4'>Invalid input</h2>
            <p className='text-stone-600 mb-4'>Oops.. Looks like you forgot to enter a value</p>
            <p className='text-stone-600 mb-4'>Please make sure you provide a valid value foe every input field.</p>
        </Modal>
        <div className="w-full lg:w-[35rem] mt-16 px-8 lg:px-0">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button></li>
            <li><button className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md" onClick={handleSave}>Save</button></li>
        </menu>
        <div>
            <Input type='text' ref={title} label="Title" />
            <Input ref={desc} label="Description" isTextArea />
            <Input type="date" ref={dueDate} label="Due Date" />
        </div>
        </div>
        </>
    )
}

export default NewProject;