import { Header } from "@/components/afterLogin/Header";
import { Sidebar } from "@/components/afterLogin/Sidebar";

export function ProfileSettings() {
  const container = (
    <div class="flex min-h-screen relative bg-black">
      {/* Animated Grid Background */}
      <div
        class="fixed inset-0 overflow-hidden pointer-events-none"
        style="z-index: 0;"
      >
        <div
          class="absolute inset-0 animate-grid"
          style="background-image: linear-gradient(to right, rgba(139, 92, 246, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(139, 92, 246, 0.5) 1px, transparent 1px); background-size: 80px 80px; opacity: 0.4; height: 200%;"
        ></div>
      </div>

      {/* Multi-colored Background Effects - Darker Space Theme */}
      <div
        class="fixed inset-0 overflow-hidden pointer-events-none"
        style="z-index: 1;"
      >
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary/6 rounded-full blur-[140px]"></div>
        <div class="absolute bottom-1/4 right-1/3 w-80 h-80 bg-cyan-500/5 rounded-full blur-[140px]"></div>
        <div class="absolute top-1/3 right-1/4 w-72 h-72 bg-pink-500/5 rounded-full blur-[140px]"></div>
        <div class="absolute bottom-1/2 left-1/3 w-64 h-64 bg-purple-500/4 rounded-full blur-[120px]"></div>
      </div>

      {/* Decorative Colorful Circles - Non-blurry */}
      <div
        class="fixed inset-0 overflow-hidden pointer-events-none"
        style="z-index: 2;"
      >
        {/* Top Right Circle - Gradient */}
        <div class="absolute top-20 right-20 w-40 h-40 bg-linear-to-br from-cyan-500/30 via-blue-500/25 to-purple-500/20 rounded-full border-2 border-cyan-400/40"></div>

        {/* Bottom Left Circle - Gradient */}
        <div class="absolute bottom-20 left-20 w-40 h-40 bg-linear-to-tr from-pink-500/30 via-purple-500/25 to-orange-500/20 rounded-full border-2 border-pink-400/40"></div>
      </div>

      {/* Sidebar on the LEFT */}
      <div style="position: relative; z-index: 10;">
        <Sidebar />
      </div>

      {/* Main content area on the RIGHT */}
      <div
        class="flex-1 flex flex-col"
        style="position: relative; z-index: 10;"
      >
        {/* Header at the TOP of main area */}
        <Header />

        {/* Page content below header */}
        <main class="flex-1 p-8">
          <div class="max-w-6xl mx-auto">
            {/* Page Title */}
            <div class="mb-6">
              <h1 class="text-2xl font-bold text-white mb-1">
                Profile Settings
              </h1>
              <p class="text-secondary-text text-sm">
                Manage your account settings and preferences
              </p>
            </div>

            {/* Settings Content */}
            <div class="space-y-5">
              {/* Profile Information & Account Security - Side by Side */}
              <div class="grid grid-cols-2 gap-5">
                {/* Profile Information Card */}
                <div class="bg-primary-dark/40 backdrop-blur-xl border border-primary/20 rounded-xl p-5">
                <h2 class="text-lg font-bold text-white mb-4">
                  Profile Information
                </h2>

                <div class="space-y-4">
                  {/* Avatar Section */}
                  <div class="flex items-center gap-4">
                    <div class="relative group">
                      <img
                        id="profile-avatar"
                        src="/media/avatar/avatar.png"
                        alt="Profile"
                        class="w-20 h-20 rounded-full border-3 border-primary/30 object-cover"
                      />
                      <label
                        for="avatar-upload"
                        class="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                      >
                        <span class="text-white text-sm font-medium">
                          Change
                        </span>
                      </label>
                      <input
                        type="file"
                        id="avatar-upload"
                        accept="image/*"
                        class="hidden"
                      />
                    </div>
                    <div>
                      <h3 class="text-white font-semibold text-lg">UserName</h3>
                      <p class="text-secondary-text text-sm">
                        user@example.com
                      </p>
                      <p class="text-primary/60 text-xs mt-1">
                        Click on avatar to upload new photo
                      </p>
                    </div>
                  </div>

                  {/* Username Field */}
                  <div>
                    <label class="block text-white text-sm font-medium mb-1.5">
                      Username
                    </label>
                    <input
                      type="text"
                      value="UserName"
                      class="w-full bg-black/40 border border-primary/20 rounded-lg px-3 py-2 text-sm text-white placeholder:text-secondary-text focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label class="block text-white text-sm font-medium mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      value="user@example.com"
                      class="w-full bg-black/40 border border-primary/20 rounded-lg px-3 py-2 text-sm text-white placeholder:text-secondary-text focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    />
                  </div>

                  {/* Bio Field */}
                  <div>
                    <label class="block text-white text-sm font-medium mb-1.5">
                      Bio
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Tell us about yourself..."
                      class="w-full bg-black/40 border border-primary/20 rounded-lg px-3 py-2 text-sm text-white placeholder:text-secondary-text focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>

                {/* Account Security Card */}
                <div class="bg-primary-dark/40 backdrop-blur-xl border border-primary/20 rounded-xl p-5">
                  <h2 class="text-lg font-bold text-white mb-4">
                    Account Security
                  </h2>

                <div class="space-y-4">
                  {/* Current Password */}
                  <div>
                    <label class="block text-white text-sm font-medium mb-1.5">
                      Current Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter current password"
                      class="w-full bg-black/40 border border-primary/20 rounded-lg px-3 py-2 text-sm text-white placeholder:text-secondary-text focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    />
                  </div>

                  {/* New Password */}
                  <div>
                    <label class="block text-white text-sm font-medium mb-1.5">
                      New Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter new password"
                      class="w-full bg-black/40 border border-primary/20 rounded-lg px-3 py-2 text-sm text-white placeholder:text-secondary-text focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    />
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label class="block text-white text-sm font-medium mb-1.5">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      placeholder="Confirm new password"
                      class="w-full bg-black/40 border border-primary/20 rounded-lg px-3 py-2 text-sm text-white placeholder:text-secondary-text focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    />
                  </div>
                </div>
              </div>
              </div>

              {/* Preferences Card - Full Width */}
              <div class="bg-primary-dark/40 backdrop-blur-xl border border-primary/20 rounded-xl p-5">
                <h2 class="text-lg font-bold text-white mb-4">Preferences</h2>

                <div class="space-y-3">
                  {/* Notification Toggle */}
                  <div class="flex items-center justify-between py-2">
                    <div>
                      <h3 class="text-white font-medium text-sm">
                        Email Notifications
                      </h3>
                      <p class="text-secondary-text text-xs">
                        Receive email updates about your activity
                      </p>
                    </div>
                    <button class="relative w-11 h-6 bg-primary/30 rounded-full transition-colors hover:bg-primary/40">
                      <div class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
                    </button>
                  </div>

                  {/* Game Invites Toggle */}
                  <div class="flex items-center justify-between py-2">
                    <div>
                      <h3 class="text-white font-medium text-sm">
                        Game Invites
                      </h3>
                      <p class="text-secondary-text text-xs">
                        Allow others to invite you to games
                      </p>
                    </div>
                    <button class="relative w-11 h-6 bg-primary rounded-full">
                      <div class="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
                    </button>
                  </div>

                  {/* Profile Visibility Toggle */}
                  <div class="flex items-center justify-between py-2">
                    <div>
                      <h3 class="text-white font-medium text-sm">
                        Public Profile
                      </h3>
                      <p class="text-secondary-text text-xs">
                        Make your profile visible to everyone
                      </p>
                    </div>
                    <button class="relative w-11 h-6 bg-primary rounded-full">
                      <div class="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div class="flex gap-3 justify-end">
                <button class="px-5 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg transition-all duration-300">
                  Cancel
                </button>
                <button class="px-5 py-2 bg-primary hover:bg-primary/90 text-black text-sm font-bold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/40">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  ) as HTMLElement;

  // Handle avatar upload
  const avatarUpload = container.querySelector(
    "#avatar-upload"
  ) as HTMLInputElement;
  const profileAvatar = container.querySelector(
    "#profile-avatar"
  ) as HTMLImageElement;

  if (avatarUpload && profileAvatar) {
    avatarUpload.addEventListener("change", (event) => {
      const target = event.target as HTMLInputElement;
      const file = target.files?.[0];

      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();

        reader.onload = (e) => {
          const result = e.target?.result;
          if (typeof result === "string") {
            profileAvatar.src = result;
          }
        };

        reader.readAsDataURL(file);
      }
    });
  }

  return container;
}
