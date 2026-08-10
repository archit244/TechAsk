import { supabase } from '../lib/supabaseClient'

/**
 * Inserts a course application enquiry into the Supabase "course_enquiries" table.
 *
 * @param {Object} data
 * @param {string} data.full_name
 * @param {string} data.email
 * @param {string} data.phone_number
 * @param {string} data.course_interest     - Course name selected
 * @param {string} data.qualification       - Highest qualification
 * @param {string} data.how_heard           - How they heard about TechAsk
 * @param {string} [data.message]           - Optional message
 * @returns {Promise<{data: any, error: any}>}
 */
export async function insertCourseEnquiry({ full_name, email, phone_number, course_interest, qualification, how_heard, message }) {
  try {
    const { data, error } = await supabase
      .from('course_enquiries')
      .insert([
        {
          full_name,
          email,
          phone_number,
          course_interest,
          qualification,
          how_heard,
          message: message || null,
        },
      ])

    if (error) {
      if (import.meta.env.DEV) {
        console.error('Supabase insertion error details:', error)
      }
      return { data: null, error }
    }

    return { data, error: null }
  } catch (err) {
    if (import.meta.env.DEV) {
      console.error('Unexpected error while inserting course enquiry:', err)
    }
    return { data: null, error: err }
  }
}
