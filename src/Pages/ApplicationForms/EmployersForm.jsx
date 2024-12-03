


const FormStructure = () => {
    return(
        <div className="flex flex-col w-full h-full bg-[#323337] px-8 py-10">
            <h3 className="text-[1.3rem] text-g-1">Fill the form given below, we will reach back to you as soon as possbile.</h3>
        </div>
    )
}

export const EmployersFormData = {
    Left: {
        Heading:'Employees Request',
        Description: "Let us know the position you need to fill, and Intellect Workforce will help you find the right fit. Please complete the form below, and we'll contact you to initiate the recruitment process."
    },
    Right: () => <FormStructure />
}