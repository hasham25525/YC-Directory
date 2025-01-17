import { StartupCardType } from '@/lib/interfaces'
import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const StartupCard = ({ post }: { post: StartupCardType }) => {

    const { _createdAt, views, author, _id, description, image, category, title } = post;

    return (
        <li className="startup-card group">
            <div className="flex-between">
                <p className="startup_card_date">
                    {formatDate(_createdAt.toString())}
                </p>
                <div className="flex gap-1.5">
                    <EyeIcon className='size-5' />
                    <span className='text-15-medium'>{views}</span>
                </div>
            </div>

            <div className="flex-between mt-5 gap-5">
                <div className="flex-1">
                    <Link href={`/user/${author?._id}`}>
                        <p className="text-16-medium line-clamp-1">{author?.name}</p>
                    </Link>
                    <Link href={`/startup/${_id}`}>
                        <h3 className='text-26-semibold line-clamp-1'>{title}</h3>
                    </Link>
                </div>
                <Link href={`/user/${author?._id}`}>
                    <Image src="https://avatars.githubusercontent.com/u/99072327?s=96&v=4" alt={author?.name || 'placeholder'} width={48} height={48} className='rounded-full' />
                </Link>
            </div>
            <Link href={`/startup/${_id}`}>
                <p className="startup-card-desc line-clamp-2">
                    {description}
                </p>
                <img src={image} alt={title} className='startup-card_img' />

            </Link>
            <div className="flex-between gap-3 mt-5">
                <Link href={`/?query=${category?.toLocaleLowerCase()}`}>
                    <p className='text-16-medium'>{category}</p>
                </Link>
                <Button className='startup-card_btn' asChild>
                    <Link href={`/startup/${_id}`}>
                        Details
                    </Link>
                </Button>
            </div>
        </li>
    )
}

export default StartupCard