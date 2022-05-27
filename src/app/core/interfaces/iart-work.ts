export interface IPagination {
    total: number;
    limit: number;
    offset: number;
    total_pages: number;
    current_page: number;
    next_url: string;
}

export interface IData {
    id: number;
    image_id: string;
    title: string;
    artist_title: string;
    place_of_origin: string;
    date_start: number;
    date_end: number;
    medium_display: string;    
    style_titles: string[];
}

export interface IConfig {
    iiif_url: string;
}

export interface IArtWork {
    pagination: IPagination;
    data: IData[];
    config: IConfig;
}
