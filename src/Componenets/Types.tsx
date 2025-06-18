export type ContactTypes= {
  id: number;
  name: string;
  email: string;
  number: string;
  isFavorite: boolean;
  

}

export type ContactContextType = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  number: string;
  setNumber: React.Dispatch<React.SetStateAction<string>>;
  data: ContactTypes[];
  setData: React.Dispatch<React.SetStateAction<ContactTypes[]>>;
  editingContact: ContactTypes | null;
  setEditingContact: React.Dispatch<React.SetStateAction<ContactTypes | null>>;
};