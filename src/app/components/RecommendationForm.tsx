import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import {
  ArrowRight,
  ArrowLeft,
  User,
  Calendar,
  Heart,
  Sparkles,
  DollarSign,
} from "lucide-react";

interface FormData {
  age: string;
  relation: string;
  occasion: string;
  hobbies: string;
  gender: string;
  budget: string;
}

interface RecommendationFormProps {
  onComplete: (data: FormData) => void;
  onBack: () => void;
}

export function RecommendationForm({
  onComplete,
  onBack,
}: RecommendationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    age: "",
    relation: "",
    occasion: "",
    hobbies: "",
    gender: "",
    budget: "",
  });

  const [currentField, setCurrentField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(formData);
  };

  const fieldVariants = {
    focused: { scale: 1.02, boxShadow: "0 0 0 3px rgba(16, 185, 129, 0.2)" },
    unfocused: { scale: 1, boxShadow: "0 0 0 0px rgba(16, 185, 129, 0)" },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center p-8">
      {/* Floating decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              x: [Math.random() * 100, Math.random() * 100],
              y: [Math.random() * 100, Math.random() * 100],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Sparkles className="text-emerald-300 opacity-30" size={20} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="bg-white/80 backdrop-blur-2xl rounded-3xl p-12 max-w-3xl w-full shadow-2xl border-4 border-emerald-100 relative overflow-hidden"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, #10b981 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative z-10"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="text-emerald-600" size={32} />
            </motion.div>
            <h2 className="text-5xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Gift Discovery
            </h2>
          </div>
          <p className="text-gray-600 text-center mb-10 text-lg">
            Tell us about the special person in your life
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-7 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-2 gap-7"
          >
            {/* Age Field */}
            <motion.div
              variants={fieldVariants}
              animate={currentField === "age" ? "focused" : "unfocused"}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-5 border-2 border-emerald-200"
            >
              <div className="flex items-center gap-2 mb-2">
                <User className="text-emerald-600" size={20} />
                <Label htmlFor="age" className="text-emerald-800 font-semibold">
                  Age
                </Label>
              </div>
              <Input
                id="age"
                type="number"
                placeholder="25"
                value={formData.age}
                onChange={(e) =>
                  setFormData({ ...formData, age: e.target.value })
                }
                onFocus={() => setCurrentField("age")}
                onBlur={() => setCurrentField(null)}
                required
                className="border-0 bg-white/70 py-6 text-lg"
              />
            </motion.div>

            {/* Gender Field */}
            <motion.div
              variants={fieldVariants}
              animate={currentField === "gender" ? "focused" : "unfocused"}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-5 border-2 border-teal-200"
            >
              <div className="flex items-center gap-2 mb-2">
                <Heart className="text-teal-600" size={20} />
                <Label htmlFor="gender" className="text-teal-800 font-semibold">
                  Gender
                </Label>
              </div>
              <Select
                value={formData.gender}
                onValueChange={(value) =>
                  setFormData({ ...formData, gender: value })
                }
                required
              >
                <SelectTrigger
                  className="border-0 bg-white/70 py-6 text-lg"
                  onFocus={() => setCurrentField("gender")}
                  onBlur={() => setCurrentField(null)}
                >
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="non-binary">Non-binary</SelectItem>
                  <SelectItem value="prefer-not-to-say">
                    Prefer not to say
                  </SelectItem>
                </SelectContent>
              </Select>
            </motion.div>
          </motion.div>

          {/* Relation Field */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{
              opacity: 1,
              x: 0,
              scale: currentField === "relation" ? 1.02 : 1,
            }} // combined `animate` prop
            transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
            className="relative bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-5 border-2 border-rose-200"
          >
            <div className="flex items-center gap-2 mb-2">
              <Heart className="text-rose-600" size={20} />
              <Label htmlFor="relation" className="text-rose-800 font-semibold">
                Your Relationship
              </Label>
            </div>
            <Select
              value={formData.relation}
              onValueChange={(value) =>
                setFormData({ ...formData, relation: value })
              }
              required
            >
              <SelectTrigger
                className="border-0 bg-white/70 py-6 text-lg"
                onFocus={() => setCurrentField("relation")}
                onBlur={() => setCurrentField(null)}
              >
                <SelectValue placeholder="Select relationship" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="parent">Parent</SelectItem>
                <SelectItem value="sibling">Sibling</SelectItem>
                <SelectItem value="spouse">Spouse/Partner</SelectItem>
                <SelectItem value="friend">Friend</SelectItem>
                <SelectItem value="colleague">Colleague</SelectItem>
                <SelectItem value="child">Child</SelectItem>
                <SelectItem value="grandparent">Grandparent</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>

          {/* Occasion Field */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{
              opacity: 1,
              x: 0,
              scale: currentField === "occasion" ? 1.02 : 1,
            }} // combined `animate` prop
            transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
            className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 border-2 border-amber-200"
          >
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="text-amber-600" size={20} />
              <Label
                htmlFor="occasion"
                className="text-amber-800 font-semibold"
              >
                Special Occasion
              </Label>
            </div>
            <Select
              value={formData.occasion}
              onValueChange={(value) =>
                setFormData({ ...formData, occasion: value })
              }
              required
            >
              <SelectTrigger
                className="border-0 bg-white/70 py-6 text-lg"
                onFocus={() => setCurrentField("occasion")}
                onBlur={() => setCurrentField(null)}
              >
                <SelectValue placeholder="Select occasion" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="birthday">Birthday</SelectItem>
                <SelectItem value="anniversary">Anniversary</SelectItem>
                <SelectItem value="wedding">Wedding</SelectItem>
                <SelectItem value="graduation">Graduation</SelectItem>
                <SelectItem value="christmas">Christmas</SelectItem>
                <SelectItem value="valentines">Valentine's Day</SelectItem>
                <SelectItem value="mothers-day">Mother's Day</SelectItem>
                <SelectItem value="fathers-day">Father's Day</SelectItem>
                <SelectItem value="thank-you">Thank You</SelectItem>
                <SelectItem value="just-because">Just Because</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>

          {/* Budget Field */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{
              opacity: 1,
              x: 0,
              scale: currentField === "budget" ? 1.02 : 1,
            }} // combined `animate` prop
            transition={{ delay: 0.6, type: "spring", stiffness: 300 }}
            className="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 border-2 border-green-200"
          >
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="text-green-600" size={20} />
              <Label htmlFor="budget" className="text-green-800 font-semibold">
                Budget Range
              </Label>
            </div>
            <Select
              value={formData.budget}
              onValueChange={(value) =>
                setFormData({ ...formData, budget: value })
              }
              required
            >
              <SelectTrigger
                className="border-0 bg-white/70 py-6 text-lg"
                onFocus={() => setCurrentField("budget")}
                onBlur={() => setCurrentField(null)}
              >
                <SelectValue placeholder="Select your budget" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-25">$0 - $25</SelectItem>
                <SelectItem value="25-50">$25 - $50</SelectItem>
                <SelectItem value="50-100">$50 - $100</SelectItem>
                <SelectItem value="100-200">$100 - $200</SelectItem>
                <SelectItem value="200-500">$200 - $500</SelectItem>
                <SelectItem value="500+">$500+</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>

          {/* Hobbies Field */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{
              opacity: 1,
              x: 0,
              scale: currentField === "hobbies" ? 1.02 : 1,
            }} // combined `animate` prop
            transition={{ delay: 0.7, type: "spring", stiffness: 300 }}
            className="relative bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-5 border-2 border-purple-200"
          >
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="text-purple-600" size={20} />
              <Label
                htmlFor="hobbies"
                className="text-purple-800 font-semibold"
              >
                Hobbies & Interests
              </Label>
            </div>
            <Textarea
              id="hobbies"
              placeholder="e.g., Photography, cooking, hiking, reading, music, gaming..."
              value={formData.hobbies}
              onChange={(e) =>
                setFormData({ ...formData, hobbies: e.target.value })
              }
              onFocus={() => setCurrentField("hobbies")}
              onBlur={() => setCurrentField(null)}
              required
              className="border-0 bg-white/70 min-h-[120px] text-lg resize-none"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex gap-4 pt-6"
          >
            <Button
              type="button"
              variant="outline"
              onClick={onBack}
              className="flex-1 py-7 text-lg border-2 border-emerald-300 hover:bg-emerald-50"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back
            </Button>
            <Button
              type="submit"
              className="flex-1 py-7 text-lg bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 shadow-lg hover:shadow-emerald-500/50 transform hover:scale-105 transition-all"
            >
              Continue
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}
