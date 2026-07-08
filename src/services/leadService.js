import { supabase } from '../lib/supabaseClient'

/**
 * Inserts a lead into the Supabase "leads" table.
 *
 * @param {Object} leadData
 * @param {string} leadData.full_name
 * @param {string} leadData.email
 * @param {string} leadData.phone_number
 * @param {string} leadData.company_name
 * @param {string} leadData.budget
 * @returns {Promise<{data: any, error: any}>}
 */
export async function insertLead({ full_name, email, phone_number, company_name, budget }) {
  try {
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          full_name,
          email,
          phone_number,
          company_name,
          budget,
        },
      ]);
      

    if (error) {
      if (import.meta.env.DEV) {
        console.error('Supabase insertion error details:', error)
      }
      return { data: null, error }
    }

    return { data, error: null }
  } catch (err) {
    if (import.meta.env.DEV) {
      console.error('Unexpected error while inserting lead to Supabase:', err)
    }
    return { data: null, error: err }
  }
}
