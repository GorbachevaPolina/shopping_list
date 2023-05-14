export type TCard = {
    id: string,
    name: string,
    price: string,
    description: string,
    image: string,
    isBought: boolean
}

export type TInputProps = {
    placeholder: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}