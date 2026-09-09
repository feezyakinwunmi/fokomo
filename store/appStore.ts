import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  estate: string;
  carType?: string;
  createdAt: string;
}

export interface BookingRequest {
  id: string;
  userId: string;
  service: string;
  carType: string;
  preferredDate: string;
  preferredTime: string;
  location: string;
  notes: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
}

export interface SurveyResponse {
  id: string;
  userId?: string;
  carWashFrequency: string;
  washLocation: string;
  spendAmount: string;
  frustration: string[];
  waitingTime: string;
  activities: string[];
  badExperience: string;
  badExperienceDetails: string;
  interestedServices: string[];
  mobileService: string;
  trustFactors: string[];
  carpiadiInterest: string[];
  paymentPreference: string[];
  differentiator: string;
  wouldUse: string;
  chooseReason: string;
  notUseReason: string;
  createdAt: string;
}

interface AppStore {
  // Auth
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  login: (email: string, password: string) => boolean;
  logout: () => void;

  // Bookings
  bookings: BookingRequest[];
  addBooking: (booking: Omit<BookingRequest, 'id' | 'createdAt'>) => void;
  updateBooking: (id: string, updates: Partial<BookingRequest>) => void;
  getBookingsByUser: (userId: string) => BookingRequest[];

  // Survey
  showSurveyModal: boolean;
  setShowSurveyModal: (show: boolean) => void;
  addSurveyResponse: (response: Omit<SurveyResponse, 'id' | 'createdAt'>) => void;
  surveyResponses: SurveyResponse[];

  // Demo data
  initializeDemoData: () => void;
}

// Demo users for testing
const DEMO_USERS: Record<string, { password: string; user: User }> = {
  'user@fokomo.com': {
    password: 'password123',
    user: {
      id: '1',
      name: 'John Doe',
      email: 'user@fokomo.com',
      phone: '+234 801 234 5678',
      estate: 'Lekki Phase 1',
      carType: 'Toyota Camry',
      createdAt: new Date().toISOString(),
    },
  },
};

export const useAppStore = create<AppStore>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      bookings: [],
      showSurveyModal: true,
      surveyResponses: [],

      setUser: (user) =>
        set({
          user,
          isAuthenticated: !!user,
        }),

      login: (email: string, password: string) => {
        const demoUser = DEMO_USERS[email];
        if (demoUser && demoUser.password === password) {
          set({
            user: demoUser.user,
            isAuthenticated: true,
          });
          return true;
        }

        // Allow any email/password for MVP testing
        const newUser: User = {
          id: Math.random().toString(36).substr(2, 9),
          name: email.split('@')[0],
          email,
          phone: '+234 801 000 0000',
          estate: 'Lekki',
          createdAt: new Date().toISOString(),
        };

        set({
          user: newUser,
          isAuthenticated: true,
        });
        return true;
      },

      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
        }),

      addBooking: (booking) => {
        const newBooking: BookingRequest = {
          ...booking,
          id: Math.random().toString(36).substr(2, 9),
          createdAt: new Date().toISOString(),
        };
        set((state) => ({
          bookings: [...state.bookings, newBooking],
        }));
      },

      updateBooking: (id: string, updates: Partial<BookingRequest>) => {
        set((state) => ({
          bookings: state.bookings.map((booking) =>
            booking.id === id ? { ...booking, ...updates } : booking
          ),
        }));
      },

      getBookingsByUser: (userId: string) => {
        return get().bookings.filter((booking) => booking.userId === userId);
      },

      setShowSurveyModal: (show: boolean) => set({ showSurveyModal: show }),

      addSurveyResponse: (response: Omit<SurveyResponse, 'id' | 'createdAt'>) => {
        const newResponse: SurveyResponse = {
          ...response,
          id: Math.random().toString(36).substr(2, 9),
          createdAt: new Date().toISOString(),
        };
        set((state) => ({
          surveyResponses: [...state.surveyResponses, newResponse],
          showSurveyModal: false,
        }));
      },

      initializeDemoData: () => {
        // This is called on first load to show survey modal
        set({ showSurveyModal: true });
      },
    }),
    {
      name: 'fokomo-store',
    }
  )
);