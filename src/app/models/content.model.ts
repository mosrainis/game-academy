// Header Category :

export interface category {
    id:         number;
    is_default: boolean;
    title:      string;
    avatar:     null | string;
    position:   number;
    is_enable:  boolean;
    is_visible: boolean;
    parent:     number | null;
    childs:     category[];
}

// Home page content :

export interface homePage {
    id:                number;
    parent_categories: Category[];
    name:              string;
    category:          Category[];
    tabStrip:          any[];
    headeritem:        null;
    homeitem:          Homeitem[];
}

export interface Category {
    id:         number;
    is_default: boolean;
    title:      string;
    avatar:     null | string;
    position:   number;
    is_enable:  boolean;
    is_visible: boolean;
    parent:     number | null;
}

export interface Homeitem {
    id:        number;
    title:     string;
    sub_title: string;
    position:  number;
    module:    number | null;
    banner:    null;
    row_type:  string;
    products:  Product[];
    row_mode:  number;
}

export interface Product {
    id:                    number;
    name:                  string;
    name_english:          string;
    product_type:          number;
    producer_name:         ProducerName;
    payment_type:          number[];
    price:                 number;
    price_show:            null;
    avatar:                { [key: string]: string };
    feature_avatar:        { [key: string]: string };
    rank:                  number;
    short_description:     string;
    is_purchased:          boolean;
    comments:              number;
    is_bookmarked:         boolean;
    sku:                   string;
    price_unit:            PriceUnit;
    total_view:            number;
    date_added:            string;
    invest_goal:           null;
    product_staff:         any[];
    support:               Support;
    is_special:            boolean;
    additional_attributes: any[];
    date_published:        string;
    customjson:            null;
    approved_age:          null;
    category?:             number[];
    description?:          string;
    category_model?:       Category[];
}

export enum PriceUnit {
    Rial = "rial",
}

export enum ProducerName {
    گیمآکادمی = "گیم آکادمی",
}

export interface Support {
    name:        string;
    tel:         string;
    email:       string;
    website:     string;
    linkedin:    string;
    google_plus: string;
    instagram:   string;
    telegram:    string;
}

