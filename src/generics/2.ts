type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

// Використання Generics і Pick для типізації параметрів
function compare<T extends Pick<AllType, 'name' | 'color'>, U extends Pick<AllType, 'position' | 'weight'>>(
  top: T,
  bottom: U
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

// Приклад використання функції
const topObject = { name: 'Object A', color: 'blue' };
const bottomObject = { position: 1, weight: 100 };

const result = compare(topObject, bottomObject);
console.log(result); // { name: 'Object A', color: 'blue', position: 1, weight: 100 }
