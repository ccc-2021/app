export type Schedule = {
    id: number;
    user_id: number;
    schedule_id?: number;
    title: string;
    content: string;
    start_at: string;
    end_at: string;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
    rate_avg: number;
    user: {
        name: string;
        profile_photo_url: string;
    };
    reviews: any;
};
export type Todo = {
    id: number;
    user_id: number;
    title: string;
    content: string;
    period_day: string;
    is_repetition: string;
    status: string;
    created_at: string;
    update_at: string;
    auth: {
        user: {
            name: string;
            profile_photo_url: string;
        }
    };
}