'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Save, Loader2, User, Globe, Palette, Upload, Camera } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'
import { useAuth } from '@/contexts/auth-context'
import { useDropzone } from 'react-dropzone'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function AdminSettingsPage() {
  const { user } = useAuth()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [profile, setProfile] = useState({
    fullName: '',
    email: '',
    avatarUrl: '',
  })
  const [siteSettings, setSiteSettings] = useState({
    siteName: 'Muhammad Sajjad Rasool',
    siteDescription: 'Senior Executive - Quality Assurance | Precision at Scale',
    siteUrl: 'https://sajjad.escritura.site',
  })

  useEffect(() => {
    if (user) {
      setProfile({
        fullName: user.fullName || '',
        email: user.email,
        avatarUrl: user.avatarUrl || '',
      })
    }
  }, [user])

  // Avatar Dropzone
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (!file) return

    setUploading(true)
    try {
      const reader = new FileReader()
      reader.onload = async (e) => {
        const dataUrl = e.target?.result as string
        setProfile(prev => ({ ...prev, avatarUrl: dataUrl }))
        toast({
          title: 'Avatar uploaded',
          description: 'Your profile image has been updated.',
        })
      }
      reader.readAsDataURL(file)
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to upload avatar.',
        variant: 'destructive',
      })
    } finally {
      setUploading(false)
    }
  }, [toast])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.webp'],
    },
    maxFiles: 1,
  })

  const handleSaveProfile = async () => {
    setIsLoading(true)
    try {
      // In production, you'd update via API
      toast({
        title: 'Settings saved',
        description: 'Your profile has been updated.',
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to save settings.',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-2" style={{ color: '#1B3022', fontFamily: 'var(--font-playfair), serif' }}>
          Settings
        </h1>
        <p style={{ color: '#1B3022', opacity: 0.7 }}>
          Manage your account and site settings
        </p>
      </motion.div>

      <div className="space-y-6">
        {/* Profile Settings */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2" style={{ color: '#1B3022' }}>
                <User size={20} style={{ color: '#C5A059' }} />
                Profile Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Avatar Upload */}
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  {profile.avatarUrl ? (
                    <div className="relative">
                      <div
                        className="w-32 h-32 rounded-full overflow-hidden"
                        style={{
                          background: "linear-gradient(135deg, #1B3022 0%, #2a4a36 50%, #1B3022 100%)",
                          boxShadow: "0 0 0 4px #C5A059, 0 8px 32px rgba(27, 48, 34, 0.3)"
                        }}
                      >
                        <img
                          src={profile.avatarUrl}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div {...getRootProps()} className="absolute -bottom-2 -right-2 cursor-pointer">
                        <input {...getInputProps()} />
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: '#C5A059' }}
                        >
                          {uploading ? (
                            <Loader2 className="h-5 w-5 animate-spin" style={{ color: '#1B3022' }} />
                          ) : (
                            <Camera size={18} style={{ color: '#1B3022' }} />
                          )}
                        </motion.div>
                      </div>
                    </div>
                  ) : (
                    <div {...getRootProps()} className="cursor-pointer">
                      <input {...getInputProps()} />
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="w-32 h-32 rounded-full flex flex-col items-center justify-center relative"
                        style={{
                          background: "linear-gradient(135deg, #1B3022 0%, #2a4a36 50%, #1B3022 100%)",
                          boxShadow: "0 0 0 4px #C5A059, 0 8px 32px rgba(27, 48, 34, 0.3)"
                        }}
                      >
                        {uploading ? (
                          <Loader2 className="h-8 w-8 animate-spin" style={{ color: '#C5A059' }} />
                        ) : (
                          <>
                            <User size={40} style={{ color: '#C5A059', opacity: 0.6 }} />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 hover:opacity-100 transition-opacity">
                              <Upload size={24} style={{ color: '#F5F2ED' }} />
                            </div>
                          </>
                        )}
                      </motion.div>
                    </div>
                  )}
                  <p className="text-xs text-center mt-2" style={{ color: '#1B3022', opacity: 0.5 }}>
                    Click to upload
                  </p>
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      value={profile.fullName}
                      onChange={(e) => setProfile(prev => ({ ...prev, fullName: e.target.value }))}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      value={profile.email}
                      disabled
                      className="mt-1"
                    />
                    <p className="text-xs mt-1" style={{ color: '#1B3022', opacity: 0.5 }}>
                      Email cannot be changed
                    </p>
                  </div>
                </div>
              </div>

              {/* Avatar URL Manual Input */}
              <div>
                <Label htmlFor="avatarUrl">Avatar URL (manual)</Label>
                <Input
                  id="avatarUrl"
                  value={profile.avatarUrl.startsWith('data:') ? '' : profile.avatarUrl}
                  onChange={(e) => setProfile(prev => ({ ...prev, avatarUrl: e.target.value }))}
                  placeholder="https://example.com/avatar.jpg"
                  className="mt-1"
                  disabled={profile.avatarUrl.startsWith('data:')}
                />
              </div>

              <Button
                onClick={handleSaveProfile}
                disabled={isLoading}
                className="gap-2"
                style={{ backgroundColor: '#1B3022', color: '#F5F2ED' }}
              >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save size={16} />}
                Save Profile
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Site Settings */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2" style={{ color: '#1B3022' }}>
                <Globe size={20} style={{ color: '#C5A059' }} />
                Site Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="siteName">Site Name</Label>
                <Input
                  id="siteName"
                  value={siteSettings.siteName}
                  onChange={(e) => setSiteSettings(prev => ({ ...prev, siteName: e.target.value }))}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="siteDescription">Site Description</Label>
                <Input
                  id="siteDescription"
                  value={siteSettings.siteDescription}
                  onChange={(e) => setSiteSettings(prev => ({ ...prev, siteDescription: e.target.value }))}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="siteUrl">Site URL</Label>
                <Input
                  id="siteUrl"
                  value={siteSettings.siteUrl}
                  onChange={(e) => setSiteSettings(prev => ({ ...prev, siteUrl: e.target.value }))}
                  className="mt-1"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Theme Info */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2" style={{ color: '#1B3022' }}>
                <Palette size={20} style={{ color: '#C5A059' }} />
                Theme Colors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div
                    className="w-full aspect-square rounded-xl mb-2"
                    style={{ backgroundColor: '#1B3022' }}
                  />
                  <p className="text-sm font-medium" style={{ color: '#1B3022' }}>Forest Green</p>
                  <p className="text-xs" style={{ color: '#1B3022', opacity: 0.5 }}>#1B3022</p>
                </div>
                <div className="text-center">
                  <div
                    className="w-full aspect-square rounded-xl mb-2"
                    style={{ backgroundColor: '#F5F2ED' }}
                  />
                  <p className="text-sm font-medium" style={{ color: '#1B3022' }}>Paper Cream</p>
                  <p className="text-xs" style={{ color: '#1B3022', opacity: 0.5 }}>#F5F2ED</p>
                </div>
                <div className="text-center">
                  <div
                    className="w-full aspect-square rounded-xl mb-2"
                    style={{ backgroundColor: '#C5A059' }}
                  />
                  <p className="text-sm font-medium" style={{ color: '#1B3022' }}>Burnished Gold</p>
                  <p className="text-xs" style={{ color: '#1B3022', opacity: 0.5 }}>#C5A059</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Admin Info */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible">
          <Card style={{ backgroundColor: '#1B3022' }}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden"
                  style={{ backgroundColor: '#C5A059' }}
                >
                  {profile.avatarUrl ? (
                    <img src={profile.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
                  ) : (
                    <span className="font-bold text-xl" style={{ color: '#1B3022' }}>
                      {user?.fullName?.charAt(0) || user?.email?.charAt(0).toUpperCase()}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-lg" style={{ color: '#F5F2ED' }}>
                    Admin Access
                  </h3>
                  <p className="text-sm" style={{ color: '#F5F2ED', opacity: 0.7 }}>
                    You have full admin privileges for this portfolio.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Admin Access Instructions */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible">
          <Card style={{ border: '2px solid #C5A059' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2" style={{ color: '#1B3022' }}>
                <span style={{ color: '#C5A059' }}>🔑</span>
                How to Access Admin Panel
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm" style={{ color: '#1B3022' }}>
                <p><strong>Admin URL:</strong> <code className="px-2 py-1 rounded" style={{ backgroundColor: 'rgba(197, 160, 89, 0.15)' }}>yourdomain.com/admin</code></p>
                <p><strong>Admin Email:</strong> <code className="px-2 py-1 rounded" style={{ backgroundColor: 'rgba(197, 160, 89, 0.15)' }}>sajjadr742@gmail.com</code></p>
                <p className="opacity-70 mt-4">
                  Only the email registered as admin can access the admin panel. Make sure to sign in with the admin email to manage your portfolio.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
