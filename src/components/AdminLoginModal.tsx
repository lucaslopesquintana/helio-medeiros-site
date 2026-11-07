import React, { useState } from 'react';
import { Lock, X, KeyRound, Mail, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      // Demo credentials validation
      const validEmails = ['helio.medeiros@pucrs.br', 'helio', 'admin'];
      const validPassword = 'direito2026';

      if (validEmails.includes(email.toLowerCase().trim()) && password === validPassword) {
        localStorage.setItem('helio_medeiros_auth', 'true');
        setIsLoading(false);
        onLoginSuccess();
        onClose();
      } else {
        setIsLoading(false);
        setError('Credenciais inválidas. Verifique o usuário e a senha.');
      }
    }, 400);
  };

  const handleFillDemo = () => {
    setEmail('helio.medeiros@pucrs.br');
    setPassword('direito2026');
    setError('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md transition-opacity">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div 
        className="relative w-full max-w-md bg-[#0A1424] border border-[#E5C384]/30 rounded-xs shadow-2xl p-8 z-10 text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 mx-auto rounded-full bg-[#0F203A] border border-[#E5C384]/40 flex items-center justify-center text-[#E5C384] mb-3 shadow-inner">
            <Lock className="w-6 h-6" />
          </div>
          <h3 className="font-brand text-2xl font-bold text-white tracking-wide">
            Área Restrita do Autor
          </h3>
          <p className="text-xs font-display uppercase tracking-widest text-[#E5C384] mt-1 font-semibold">
            Painel de Publicação de Artigos
          </p>
          <p className="text-xs text-slate-400 mt-2 font-light">
            Acesso reservado ao Dr. Hélio Medeiros para redação, gestão e publicação de ensaios dogmáticos.
          </p>
        </div>

        {/* Demo Fast Fill Pill */}
        <div className="mb-6 p-3 bg-[#050B14] border border-white/10 flex items-center justify-between text-xs">
          <div className="text-slate-400 font-mono text-[11px]">
            <span>Acesso demonstrativo:</span>
            <div className="text-[#E5C384] font-semibold">helio.medeiros@pucrs.br</div>
          </div>
          <button
            type="button"
            onClick={handleFillDemo}
            className="px-2.5 py-1 text-[10px] font-display uppercase tracking-wider bg-[#E5C384]/15 hover:bg-[#E5C384]/30 text-[#E5C384] border border-[#E5C384]/30 cursor-pointer transition-colors"
          >
            Preencher
          </button>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-5 p-3 bg-red-950/50 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-[11px] font-display uppercase tracking-wider text-slate-300 mb-1.5 font-medium">
              E-mail ou Usuário
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="helio.medeiros@pucrs.br"
                className="w-full bg-[#050B14] border border-white/15 focus:border-[#E5C384] text-white text-xs pl-10 pr-4 py-2.5 outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-display uppercase tracking-wider text-slate-300 mb-1.5 font-medium">
              Senha de Acesso
            </label>
            <div className="relative">
              <KeyRound className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-[#050B14] border border-white/15 focus:border-[#E5C384] text-white text-xs pl-10 pr-4 py-2.5 outline-none transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-2 py-3 bg-gradient-to-r from-[#E5C384] via-[#F3DAA2] to-[#C5A568] hover:from-[#F3DAA2] hover:to-[#E5C384] text-[#050B14] font-display font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-[#E5C384]/20 transition-all cursor-pointer disabled:opacity-50"
          >
            <span>{isLoading ? 'Autenticando...' : 'Acessar Painel de Redação'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-center gap-1.5 text-[11px] font-mono text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-[#E5C384]" />
          <span>Ambiente Criptografado • Acesso Seguro</span>
        </div>

      </div>
    </div>
  );
};
