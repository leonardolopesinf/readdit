declare namespace Posts {
  declare type FilterNames = {
    [key in Reddit.PostFilter]: string;
  };
}
