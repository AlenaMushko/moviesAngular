import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environment/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabaseClient: SupabaseClient;

  constructor() {
    this.supabaseClient = createClient(environment.SUPABASE_URL, environment.SUPABASE_ANON_KEY);
  }

  async checkExistingUser(email: string): Promise<any> {
    const existingUser = await this.supabaseClient
        .from('users')
        .select('email')
        .eq('email', email)
        .single();

    return existingUser;
  }

  async register(name: string, email: string, password: string): Promise<any> {
    const { data, error } = await this.supabaseClient
        .from('users')
        .insert({
          name,
          email,
          password
        });

    if (error) {
      throw error;
    }

    return data;
  }

    async login(email: string, password: string): Promise<any> {
        const { data, error } = await this.supabaseClient
            .from('users')
            .select('*')
            .eq('email', email)
            .eq('password', password);

        if (error) {
            throw error;
        }

        return data[0];
    }
}
