import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}


//rest operator ...props pega todos valores restantes
export function Avatar({hasBorder = true, ...props}: AvatarProps) {
    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            {
                //insere todas as propriedades de img
                //spread operator
                ...props
            }
        />
    )
}