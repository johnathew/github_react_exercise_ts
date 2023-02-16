import { useState } from "react";

export const useFormQuery = () => {

    const [query, setQuery] = useState('')

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const target = event.target as HTMLFormElement;
        const { form } = Object.fromEntries( new FormData(target))

        if (form.toString().trim().length === 0) return 

        setQuery(form.toString())
        target.reset()
        target.focus()
    }
    return {query, handleSubmit}
}

