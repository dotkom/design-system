/// <reference types="react" />
interface ICard {
    eventName: string;
    eventColor: string;
    date: string;
    attending: string;
    imgSrc: string;
    isLargeEvent: boolean;
    category: string;
}
declare const EventCard: ({ eventName, eventColor, date, attending, imgSrc, isLargeEvent, category }: ICard) => JSX.Element;
export default EventCard;
