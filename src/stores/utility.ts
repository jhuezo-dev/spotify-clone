export function updateStorageSettings(key: string | number, val: any, itemName: string) {
  const storage = JSON.parse(localStorage.getItem(itemName)!)

  if(!storage) {
    localStorage.setItem(
      itemName,
      JSON.stringify({
        [key]: val
      })
    )
  } else {
    storage[key] = val
    localStorage.setItem(itemName, JSON.stringify(storage))
  }
}
export function getStorageNavbar(navbar: string) {
  const s = JSON.parse(localStorage.getItem(navbar)!);
  if(s) {
    return {key: navbar, value: s}
  }
}