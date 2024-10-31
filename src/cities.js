import { getFirestore, collection, query, where, doc, getDocs } from 'firebase/firestore'
import { useCollection, useDocument } from 'vuefire'
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getFirebase } from './firebase';

const db = getFirebase().firestore; // Get Firestore instance

// Accessing the 'cities' collection
const cityCol = collection(db, 'cities'); // Correct way to reference collection
console.log(cityCol); // This should log the collection reference

// Accessing the document within the 'lookups' collection
const cityLookupCol = doc(db, 'lookups', 'cities'); 
console.log(cityLookupCol); // This should log the document reference
export function useCitiesQuery(queryCallback) {
  const router = useRouter()
  const route = useRoute()
  const criteriaList = filterWhere(queryCallback(route))
  const criteria = ref(criteriaList)
  const citySource = computed(() => query(cityCol, ...criteria.value))
  const cities = useCollection(citySource)
  function setQuery({ whereQuery, onRoute }) {
    const whereList = filterWhere(whereQuery);
    onRoute(router)
    // This sets the reactive ref and tells the query to recompute
    criteria.value = whereList
  }
  return { setQuery, cities }
}

export function useCityLookup() {
  return useDocument(cityLookupCol)
}

export function useCity(routeCallback) {
  const route = useRoute()
  const cityId = routeCallback(route);
  return useDocument(doc(db, 'cities', cityId))
}

function filterWhere(whereQuery) {
  return whereQuery
    .filter(v => v != null)
    .map(v => where(...v))
}
