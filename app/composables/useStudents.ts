export interface Student {
  id: number
  name: string
  studentId: string
  course: string
  yearLevel: string
}

// Shared student data used by the Home and Students pages.
export const useStudents = () => {
  const students: Student[] = [
    { id: 1, name: 'Lea M. Andrade', studentId: '2024-0001', course: 'BS Information Technology', yearLevel: '3rd Year' },
    { id: 2, name: 'Sophia Figuron', studentId: '2024-0002', course: 'BS Computer Science', yearLevel: '2nd Year' },
    { id: 3, name: 'Wesley Ernest Lim', studentId: '2024-0003', course: 'BS Information Systems', yearLevel: '4th Year' },
    { id: 4, name: 'John Mark Lugsanay', studentId: '2024-0004', course: 'BS Computer Engineering', yearLevel: '1st Year' },
    { id: 5, name: 'Ace Magbanua', studentId: '2024-0005', course: 'BS Information Technology', yearLevel: '2nd Year' },
    { id: 6, name: 'Mark John Flores', studentId: '2024-0006', course: 'BS Computer Science', yearLevel: '3rd Year' }
  ]
  return { students }
}
