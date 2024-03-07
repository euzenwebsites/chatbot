"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AvatarImg from '@/public/images/avatar.png';
import Chat from '@/public/icons/chat-bubble.png';
import Logout from '@/public/icons/logout.svg';
import ArrowLeft from '@/public/icons/arrow-left.png';
import ArrowRight from '@/public/icons/arrow-right.png';
import Back from '@/public/icons/back.png';
import Forward from '@/public/icons/forward.png';
import Media from '@/components/ui/Media';
import ChatHistory from '@/components/ui/chatHistory';
import ChatBox from '@/components/ui/ChatBox';

const page = () => {
    const [isRevealed, setIsRevealed] = useState(false);
    const [isMediaRevealed, setIsMediaRevealed] = useState(false);

    const handleRevealClick = () => {
        setIsRevealed(!isRevealed);
    };

    const handleRevealMediaClick = () => {
        setIsMediaRevealed(!isMediaRevealed);
    };

    return (
        <section className="flex flex-row w-[100%]">
            <div className="w-[20%] sm:w-[8%] bg-purple flex flex-col justify-between pt-10 border-r-2">
                <div className="flex flex-col items-center">
                    <Image src={AvatarImg} width={50} />
                    <div
                        className="mt-20  hover:bg-[#a05faa] hover:border-r-2 w-full flex items-center justify-center gap-4 py-4 box-border"
                        onClick={handleRevealClick}
                    >
                        <Image src={Chat} />
                        {!isRevealed && <Image src={ArrowLeft} />}
                        {isRevealed && <Image src={ArrowRight} />}
                    </div>
                </div>
                <div className="flex justify-center items-center mb-10">
                    <Link href="/">
                        <Image src={Logout} />
                    </Link>
                </div>
            </div>

            {isRevealed && (
                <div className="sm:w-[25%]">
                    <ChatHistory />
                </div>
            )}

            <div className="w-[80%] sm:w-full relative">
                <ChatBox />

                <button
                    className="bg-[#eaeaea] transition ease-in-out delay-150 h-16 w-8 absolute right-0 top-[35%]  rounded-lg flex justify-center items-center"
                    onClick={handleRevealMediaClick}
                >
                    {!isMediaRevealed && <Image src={Back} width={20} />}
                    {isMediaRevealed && <Image src={Forward} width={20} />}
                </button>
            </div>

            {isMediaRevealed && (
                <div className="sm:w-[25%] max-sm:hidden transition-all duration-500 ease-in-out ">
                    <Media />
                </div>
            )}
        </section>
    );
};

export default page;
