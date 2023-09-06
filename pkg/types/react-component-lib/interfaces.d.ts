export interface EventEmitter<T = any> {
    emit: (data?: T) => CustomEvent<T>;
}
export interface StyleReactProps {
    class?: string;
    className?: string;
    style?: {
        [key: string]: any;
    };
}