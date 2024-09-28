import axios from 'axios'

const API_URL = 'http://localhost:5000/api/requirements'

export const fetchAllRequirements = async () => {
  try {
    const response = await axios.get(API_URL)
    console.log('Requirements:', response.data)
    return response.data
  } catch (error) {
    console.error('Error fetching requirements:', error)
    throw error
  }
}
export const fetchRequirementById = async (id: string| undefined) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`)
        console.log('Requirement:', response.data)
        return response.data
    } catch (error) {
        console.error(`Error fetching requirement with id ${id}:`, error)
        throw error
    }
}