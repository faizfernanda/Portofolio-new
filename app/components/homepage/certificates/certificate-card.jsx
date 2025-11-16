// @flow strict
import Link from 'next/link';
import { FaCertificate } from 'react-icons/fa';

function CertificateCard({ certificate }) {
  return (
    <div className="flex flex-col justify-between border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg p-5">
      <div>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="bg-[#241a4a] text-pink-400 rounded-full p-3 inline-flex">
              <FaCertificate size={20} />
            </span>
            <div>
              <p className="text-white text-lg font-semibold">{certificate.title}</p>
              <p className="text-[#16f2b3] text-sm">{certificate.issuer}</p>
            </div>
          </div>
          <span className="text-xs text-[#d3d8e8] uppercase tracking-wide">
            {certificate.issueDate}
          </span>
        </div>

        <p className="mt-4 text-sm lg:text-base text-[#d3d8e8]">
          {certificate.description}
        </p>

        {certificate.skills?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {certificate.skills.map((skill) => (
              <span
                key={skill}
                className="text-xs text-[#c1c9f9] bg-[#161233] border border-[#25213b] rounded-full px-3 py-1"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      {certificate.credentialUrl && (
        <div className="mt-6">
          <Link
            className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#16f2b3] transition-colors duration-200"
            href={certificate.credentialUrl}
            target="_blank"
          >
            View Credential
            <span aria-hidden className="text-[#16f2b3]">↗</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CertificateCard;
