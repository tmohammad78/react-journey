import { useData } from "../hooks/useData";


function ObjectList() {

  const {loading,error,data} = useData('objects')
  
  return (
    <div>
      {
        loading ? <span>Loading ...</span> : null
      }
      {
        error ? <span> Something bad happend</span> : null
      }
      {data.map(item => {
        return (
          <div key={item.id}>
            <span>{item.name}</span>
          </div>
        )
      })}
    </div>
  )
  
}

export default ObjectList;
