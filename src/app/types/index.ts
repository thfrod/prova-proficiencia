export interface User {
  id: number;
  name: number;
  email: string;
}

export interface AuthenticatedUser extends User {
  apiKey: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}

export interface LoginApiResponse extends ApiResponse {
  user: AuthenticatedUser;
}

export interface Dashboard {
  salesMetrics: any[];
  userStatistics: UserStatistics;
  topProducts: Product[];
  recentActivity: RecentActivityItem[];
}

export interface Product {
  id: number;
  name: string;
  revenue: number;
  sales: number;
}

export interface UserStatistics {
  totalUsers: number;
  activeUsers: number;
  newUsersThisMonth: number;
  userRetentionRate: number;
}
export interface RecentActivityItem {}
