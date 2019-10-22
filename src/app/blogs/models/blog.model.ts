export interface BlogModel {

    blogname: string;
    description: string;
    image: string;
    adult: boolean;
    free: boolean;
    private: boolean;
    created: {
        seconds: number,
        miliseconds: number
    };
    id: string;
    postCount: number;
    likesCount: number;
    commentsCount: number;
    subscribersCount: number;
    owner: string;
    creator: string;
    tags?: any[];
}
