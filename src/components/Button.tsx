
import { IconType } from 'react-icons'
type Buttontype = {
    label: string,
    disabled?: boolean,
    outline?: boolean,
    small?: boolean,
    custom?: string,
    icon?: IconType,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<Buttontype> = ({
    label, disabled, outline, small, custom, icon: Icon, onClick
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`disabled:opacity-70 disabled:cursor-not-allowed
        rounded-md hover:opacity-80 transition w-full border-slate-700 flex first-letter:items-center justify-center
        gap-2 ${outline ? 'bg-white' : 'bg-slate-700'} ${outline ?
                    'text-slate-700 ' : 'text-white'} ${small ? 'text-sm font-light' : 'font-semibold text-md'}
                    ${small ? 'px-2 py-1  border-[1px]' : 'py-3 px-4 border-[2px]'} 
                    ${custom ? custom : ''} `
            }>
            {Icon && <Icon size={24} />}
            {label}
        </button>
    );
};

export default Button;