import style from './Contact.module.scss';

export const Contact: React.FC<AboutMeContact> = ({title, description}) => {
    return <>
        <div className={style.contactTitle}>
            {title}
        </div>
        <div className={style.contactDescription}>
            {description}
        </div>
    </>;
};

//types
type AboutMeContact = {
    title: string
    description: string
}