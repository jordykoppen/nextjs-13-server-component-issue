
function fetchUser (id: number): Promise<{ id: number, name: string, age: number }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        name: 'John Doe',
        age: 44,
      })
    }, 300)
  })
}

export default async function User () {
  const {name, age} = await fetchUser(1)
  return <div>{name} - {age}</div>
}
