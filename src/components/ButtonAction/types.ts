interface unusual {
  disabled?: boolean;
  isLoading?: boolean;
}

export interface thisComp extends unusual{
  children: any;
  onClick: ()=>void;
}

export interface thisCompStyle extends unusual{

}