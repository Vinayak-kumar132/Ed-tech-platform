import React from 'react'

const IconBtn = ({
    text,
    onclick,
    children,
    disabled,
    outline = false,
    customClasses,
    type
}) => {
    return (
        <button
        disabled={disabled}
        onClick={onclick}
        type={type}
        className={`flex items-center justify-center gap-2 text-center bg-yellow-100 py-2 px-3 rounded-md text-richblack-900 font-semibold h-fit ${customClasses}`}

        >
            {
                children ? (
                    <>
                        <span>
                            {text}
                        </span>
                        {children}
                    </>
                    
                ) :(text)
        }
        </button>
    )
}

export default IconBtn
