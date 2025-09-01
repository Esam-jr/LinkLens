import { Link } from "react-router";
import { LANGUAGE_TO_FLAG } from "../constants/constants";

type Friend = {
  _id: string;
  fullName: string;
  profilePic: string;
  location?: string;
  nativeLanguage: string;
  learningLanguage: string;
  bio?: string;
};

type FriendCardProps = {
  friend: Friend;
};

function FriendCard({ friend }: FriendCardProps) {
  return (
    <div className="card bg-base-200 hover:shadow-md transition-shadow">
      <div className="card-body p-4">
        {/* USER INFO */}
        <div className="flex items-center gap-3 mb-3">
          <div className="avatar size-12">
            <img src={friend.profilePic} alt={friend.fullName} />
          </div>
          <h3 className="font-semibold truncate">{friend.fullName}</h3>
        </div>

        {/* LANGUAGE BADGES */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          <span className="badge badge-secondary text-xs flex items-center">
            {getLanguageFlag(friend.nativeLanguage)}
            Native: {friend.nativeLanguage}
          </span>
          <span className="badge badge-outline text-xs flex items-center">
            {getLanguageFlag(friend.learningLanguage)}
            Learning: {friend.learningLanguage}
          </span>
        </div>

        {/* MESSAGE BUTTON */}
        <Link to={`/chat/${friend._id}`} className="btn btn-outline w-full">
          Message
        </Link>
      </div>
    </div>
  );
}
export default FriendCard;

/**
 * Returns an <img> element with a flag icon for the given language,
 * or null if no match is found.
 */
export function getLanguageFlag(language: string) {
  if (!language) return null;

  const langLower = language.toLowerCase();
  const countryCode =
    LANGUAGE_TO_FLAG[langLower as keyof typeof LANGUAGE_TO_FLAG];

  if (countryCode) {
    return (
      <img
        src={`https://flagcdn.com/24x18/${countryCode}.png`}
        alt={`${langLower} flag`}
        className="h-3 mr-1 inline-block"
      />
    );
  }

  return null;
}
