import { WeaponData } from 'pipeline'
import { IWeaponSheet } from '../../../../Types/weapon'
import data_gen from './data_gen.json'
import icon from './Icon.png'
import iconAwaken from './AwakenIcon.png'
const refinementVals = [12, 15, 18, 21, 24]
const weapon: IWeaponSheet = {
  ...data_gen as WeaponData,
  icon,
  iconAwaken,
  document: [{
    conditional: {
      key: "d",
      name: "After Elemental Burst",
      maxStack: 1,
      stats: stats => ({
        atk_: refinementVals[stats.weapon.refineIndex],
        moveSPD_: refinementVals[stats.weapon.refineIndex],
      })
    }
  }],
}
export default weapon