import { useFeth } from '../../hooks/useFetch';


export const Creators = ( id ) => {
    const key='creators'
    const time=1

    const { data,status}=  useFeth(id=`/${id}/${key}`,key,time)


 return  {data, status}


};

